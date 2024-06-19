"use client"

import { toggleProductAvaialbilty, deleteProduct } from '@/app/admin/_actions/product'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation';
import { useTransition } from 'react'


export function ActiveToggleDropdownItem({ id, is_available_for_purchase }) {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    return (
        <DropdownMenuItem
            disabled={isPending}
            onClick={() => {
                startTransition(async () => {
                    await toggleProductAvaialbilty(id, !is_available_for_purchase);
                    router.refresh();
                })
            }}>
            {is_available_for_purchase ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    )

}

export function DeleteDropdownItem({ id, disabled }) {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    return (
        <DropdownMenuItem
            disabled={disabled || isPending}
            onClick={() => {
                startTransition(async () => {
                    await deleteProduct(id);
                    router.refresh();
                })
            }}
        >Delete
        </DropdownMenuItem>
    )
} 