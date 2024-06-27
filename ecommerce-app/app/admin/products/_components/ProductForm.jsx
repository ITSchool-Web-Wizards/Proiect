"use client"

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { addProduct } from "@/app/admin/_actions/product";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";



export function ProductForm() {

    const [priceInCents, setPriceInCents] = useState();


    return (
        <>
            <form action={addProduct} className="space-y-8">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Price In Cents</Label>
                    <Input
                        type="number"
                        id="priceInCents"
                        name="priceInCents"
                        required
                        value={priceInCents}
                        onChange={e => setPriceInCents(Number(e.target.value) || undefined)}
                    />
                    <div className="texted-muted-foreground">
                        {formatCurrency((priceInCents || 0) / 100)}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" required />
                </div>
                <div className="flex justify-between">
                    <SubmitButton />
                    <CancelButton />
                </div>
            </form>
        </>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : "Save"}
        </Button>
    )
}

function CancelButton() {
    const navigate = useRouter();
    const { cancel } = useFormStatus();

    return (
        <Button
            type="button"
            onClick={() => {
                cancel;
                navigate.push("/admin/products");
            }}
        >
            Cancel
        </Button>
    )
}