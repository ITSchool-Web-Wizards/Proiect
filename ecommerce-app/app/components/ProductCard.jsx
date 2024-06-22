import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter
} from './ui/card';
import { formatCurrency } from '../../lib/formatters';
import { Button } from './ui/button';
import { Link } from 'next/link';
import Image from 'next/image';


export function ProductCard({ id, name, price_in_cents, description, imagePath }) {
    return (
        <Card className='flex overflow-hidden flex-col'>
            <div className='relative w-full h-auto aspect-video'>
                <Image src={imagePath} fill alt={name} />
            </div>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{formatCurrency(price_in_cents / 100)}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
                <p className='line-clamp-4'>{description}</p>
            </CardContent>
            {/* <CardFooter>
                <Button aschild size='lg' className='w-full'>
                    <Link href={`/products/${id}/purchase`}>Purchase</Link>
                </Button>
            </CardFooter> */}
        </Card>
    )
}