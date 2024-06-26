import { notFound, redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client'

export async function deleteProduct(id) {

    const supabase = createClient();

    const { product } = await supabase
        .from('product_table')
        .delete()
        .match({ id });

    if (product == null) return notFound();

    redirect("/admin/products")
    
}