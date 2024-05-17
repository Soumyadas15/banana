"use client"

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog"
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    title?: string;
    description?: string;
    isOpen? : boolean;
    onClose: () => void;
    body?: React.ReactElement;
}

export const Modal = ({
    isOpen,
    onClose,
    title,
    description,
    body,
}: ModalProps) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="">

                <div>
                    {body}
                </div>

            </DialogContent>
        </Dialog>
    )
}