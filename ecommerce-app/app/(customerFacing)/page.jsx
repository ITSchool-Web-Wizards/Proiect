import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { getMostPopularProducts, getNewestProducts } from "@/utils/supabase/productData";
import { createClient } from "@/utils/supabase/server";
import { ProductCard } from '../components/ProductCard';



export default function HomePage() {

    return (
        <main className="space-y-12">
            <ProductGridSection
                title={"Most Popular"}
            />
            <ProductGridSection
                title={"Newest Products"}
                
            />
        </main>
    );
}

async function ProductGridSection({ title }) {

    const supabase = createClient();

    const { data: product_table, error } = await supabase
        .from('product_table')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(2);

    if (error) {
        console.error('Error fetching newest products:', error);
    }

    return (
        <>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <Button variant="outline" asChild>
                        <Link href="/products" className="space-x-2">
                            <span>View All</span>
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {product_table.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}


// function ProductGridSection({ title, productsFetcher }) {

//     const [products, setProducts] = useState([]);
//     const supabase = createClient();

//     useEffect(() => {
//         supabase
//             .from('product_table')
//             .select('*')
//             .then(({ data, error }) => {
//                 if (error) {
//                     console.error('Error fetching newest products:', error);
//                 }
//                 setProducts(data);
//             }
//                 , []);
//     }, []);

//     return (
//         <>
//             <div className="space-y-4">
//                 <div className="flex gap-4">
//                     <h2 className="text-3xl font-bold">{title}</h2>
//                     <Button variant="outline" asChild>
//                         <Link href="/products" className="space-x-2">
//                             <span>View All</span>
//                             <ArrowRightIcon className="size-4" />
//                         </Link>
//                     </Button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map(product => (
//                         <ProductCard key={product.id} {...product} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }












// function getNewestProducts() {

//     const supabase = createClient();

//     let { data: product_table, error } = supabase
//         .from("product_table")
//         .select("*")
//         .order("created_at", { ascending: false })
//         .limit(10);

//     if (error) {
//         console.error("Error fetching newest products:", error);
//     }

//     return data;

// }

// function getMostPopularProducts() {

//     const supabase = createClient();

//     let { data: product_table, error } = supabase
//         .from("product_table")
//         .select("*")
//         .order("views", { ascending: false })
//         .limit(10);

//     if (error) {
//         console.error("Error fetching most popular products:", error);
//     }

//     return product_table;

// }

// export default function HomePage() {
//     return (
//         <main className="space-y-12">
//             <ProductGridSection
//                 title={"Most Popular"}
//                 productsFetcher={getMostPopularProducts} />
//             <ProductGridSection
//                 title={"Newest Products"}
//                 productsFetcher={getNewestProducts} />
//         </main>
//     );
// }

// async function ProductGridSection({ productsFetcher, title }) {

//     const [product_table, setProductTable] = useState([]);

//     useEffect(() => {
//         const products = productsFetcher();
//         setProductTable(products);
//     }
//         , []);

//     return (
//         <>
//             <div className="space-y-4">
//                 <div className="flex gap-4">
//                     <h2 className="text-3xl font-bold">{title}</h2>
//                     <Button variant="outline" asChild>
//                         <Link href="/products" className="space-x-2">
//                             <span>View All</span>
//                             <ArrowRightIcon className="size-4" />
//                         </Link>
//                     </Button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {product_table.map(product => (
//                         <ProductCard key={product.id} {...product} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
