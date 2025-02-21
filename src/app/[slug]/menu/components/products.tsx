import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
    products: Product[]
}

const Products = ({products} : ProductsProps) => {
    return (<div className="space-y-3 px-5">
        {products.map(products => (
            <Link key={products.id} 
            className='flex items-center justify-between gap-10 py-3 border-b' href={'/'}>
                <div>
                    <h3 className="text-sm font-medium">{products.name}</h3>
                    <p className="line-clamp-2 text-muted-foreground"> {products.description}</p>
                    <p className='pt-3 text-sm font-semibold'>
                        {new Intl.NumberFormat('pt-BR',{
                            style : 'currency',
                            currency:'BRL',
                        }).format(products.price)}
                    </p>
                </div>
                <div className="relative min-h-[82px] min-w-[120px]">
                    <Image src={products.imageUrl} alt={products.name} fill className='rounded-lg object-contain' />
                </div>
            </Link>
        ))}
    </div> );
}
 
export default Products;