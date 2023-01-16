import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

function menuItem() {
    const names = useRouter();
    const name = names.query.NavLinks
    return (
        <div className='flex flex-col justify-center items-center gap-10 my-20'>
            <span className='text-3xl'> {name}</span>
            <span className='text-green-700 text-2xl'><Link href={"/"}>HOME</Link></span>
        </div>
    );
}
export default menuItem;