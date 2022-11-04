import React from "react";

type Props = {
    children: React.ReactNode;
}

export default function Modal({children}: Props) {
    const openModal = () => {
        const modalDialog = document.getElementById('toolingDialog');
        // @ts-ignore
        modalDialog.showModal();

        // @ts-ignore
        modalDialog.addEventListener('click', function (event) {
            // @ts-ignore
            let rect = modalDialog.getBoundingClientRect();
            let isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
                && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                // @ts-ignore
                modalDialog.close();
            }
        });
    }

    const closeModal = () => {
        const modalDialog = document.getElementById('toolingDialog');
        // @ts-ignore
        modalDialog.close();
    }

    return (
        <>
        <dialog id={'toolingDialog'}>
            {children}
        </dialog>
            <button type={'button'} onClick={openModal}>Open</button>
        </>
    )
}