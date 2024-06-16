"use client"
import ProductList from '@/components/product-list'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const ArchivesForm = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Kho NFS Của Bạn" description="Quản lý sản phẩm NFT và thay đổi cập nhật" />
      </div>
      <Separator />
      <div className='flex'>
      <ProductList title={''} items={[]}/>
      </div>
    </>
  )
}

export default ArchivesForm