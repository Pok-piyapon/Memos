import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        "Content-Type": "application/json"
    }
})

// Request Data
axiosInstance.interceptors.request.use(request => {
    
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return request;
}, error => {
    return Promise.reject(error)
})

// Response Data and Detected error response
axiosInstance.interceptors.response.use(response => response,
    async error => {
        const originalReq = error.config
        if (error.response.status == 401 && !originalReq._retry) {
            originalReq._retry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.post('http://localhost:3030/refresh', {
                    refreshToken,
                });
                const { accessToken, refreshToken: newRefreshToken } = response.data;
                // Store the new access and refresh tokens.
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken.newRefreshToken);
                // Update the authorization header with the new access token.
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                return axiosInstance(originalReq); // Retry the original request with the new access token.
            } catch (refreshError) {
                const path = (window.location.pathname)
                if (!(path == "/signin" || path == "/signup")) {
                    window.location.href = '/signin?session_expired=true';
                }
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance