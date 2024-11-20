import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';



export default function ModalComponent({Container,state,stater}) {

    // State event resize width
    let [ModalWidth,SetModalWidth] = useState(window.innerWidth)
    // event resize
    window.onresize = async ()=> {
        SetModalWidth(event.currentTarget.innerWidth)
        // console.log(event.currentTarget.innerWidth)
    }
    return (
        <div>
            <Modal
                open={state}
                closeOnEsc={true}
                onEscKeyDown={() => stater(false)}
                onOverlayClick={() => stater(false)}
                showCloseIcon={false}
                onClose={()=> ""}
            >
                <div style={{
                    width: `${ModalWidth  - 650}px`
                }}>
                    {Container}
                </div>
            </Modal>
        </div>
    )
}