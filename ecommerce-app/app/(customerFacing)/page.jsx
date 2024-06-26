import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { ProductCard } from "../components/ProductCard";


export default function HomePage() {

    return (
        <main className="space-y-12">
            <ProductGridSection
                title={"Newest Products"}
            />
        </main>
    );
}

async function ProductGridSection({ title }) {

    const supabase = createClient();

    async function getNewestProducts() {
        const { data: product_table, error } = await supabase
            .from('product_table')
            .select('*')
            .eq('is_available_for_purchase', true)
            .order('created_at', { ascending: true })
            .limit(2)

        if (error) {
            console.error('Error fetching newest products:', error);
        }

        return product_table;
    }

    const product_table = await getNewestProducts();

    return (
        <>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <Button variant="outline" asChild>
                        <Link href="/products" className="space-x-2">
                            <span href='/products'>View All</span>
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product_table.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}

