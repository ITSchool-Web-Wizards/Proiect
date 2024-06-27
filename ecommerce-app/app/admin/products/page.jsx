import { PageHeader } from '../_components/PageHeader';
import { Button } from '@/app/components/ui/button';
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '@/app/components/ui/table';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { CheckCircle2, XCircle } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import { MoreVertical } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/ui/dropdown-menu';
import { _count } from '@/utils/supabase/server';
import { ActiveToggleDropdownItem, DeleteDropdownItem } from '@/app/admin/products/_components/ProductActions';
import { DropdownMenuSeparator } from '@/app/components/ui/dropdown-menu';



export default function AdminProductsPage() {
    return (
        <>
            <div className='flex justify-between items-center gap-4'>
                <PageHeader>Products</PageHeader>
                <Button asChild>
                    <Link href="/admin/products/new">Add Product</Link>
                </Button>
            </div>
            <ProductsTable />
        </>
    )
}

async function ProductsTable() {

    const supabase = createClient();
    let { data: product_table, error } = await supabase
        .from('product_table')
        .select('id, name, price_in_cents, is_available_for_purchase, file_path');

    const { data: orders } = await supabase
        .from('product_table')
        .select('count(*)', { count: 'exact' });


    if (error) {
        console.error(error);
        return <div>Error loading products</div>
    }

    if (product_table.length === 0) {
        return <div>No products available</div>
    }

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-0">
                            <span className="sr-only">Available For Purchase</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead className="w-0">
                            <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {product_table.map(product => (
                        <TableRow key={product.id}>
                            <TableCell>
                                {product.is_available_for_purchase ? (
                                    <>
                                        <span className='sr-only'>Available</span>
                                        <CheckCircle2 />
                                    </>
                                ) : (
                                    <>
                                        <span className='sr-only'>Unavailable</span>
                                        <XCircle className='stroke-destructive' />
                                    </>
                                )}
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{formatCurrency(product.price_in_cents / 100)}</TableCell>
                            <TableCell>{formatNumber(orders)}</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <MoreVertical />
                                        <span className='sr-only'>Actions</span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <ActiveToggleDropdownItem
                                            id={product.id}
                                            is_available_for_purchase={product.is_available_for_purchase}
                                        />
                                        <DropdownMenuSeparator />
                                        <DeleteDropdownItem
                                            id={product.id}
                                            disabled={product > 0}
                                        />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}  