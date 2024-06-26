import { createClient } from '../../../utils/supabase/server'
import { ProductCard } from '../../components/ProductCard';



export default async function ProductsPage() {

    const supabase = createClient();

    async function getProducts() {
        const { data: product_table, error } = await supabase
            .from('product_table')
            .select('*')

        if (error) {
            console.error('Error fetching products:', error);
        }

        return product_table;
    }

    const product_table = await getProducts();

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <h2 className="text-3xl font-bold">All Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product_table.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );

}