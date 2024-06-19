
import { notFound, redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client'



export async function addProduct(formData) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('product_table')
        .insert([{
            name: formData.get('name'),
            description: formData.get('description'),
            price_in_cents: formData.get('priceInCents'),
        }]);

    if (error) {
        console.error(error);
        return { error: error.message }
    }

    redirect("/admin/products")
}

export async function toggleProductAvaialbilty(productId, isAvailable) {

    const supabase = createClient();

    const { error } = await supabase
        .from('product_table')
        .update({ is_available_for_purchase: isAvailable })
        .match({ id: productId });

    if (error) {
        console.error(error);
        return { error: error.message }
    }
}

export async function deleteProduct(id) {

    const supabase = createClient();

    const { product } = await supabase
        .from('product_table')
        .delete()
        .match({ id });

    if (product == null) return notFound();

}