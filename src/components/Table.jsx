import React from 'react'
import { Table } from 'antd';

  
  
const Tables = ({data}) => {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'name',
            sorter:(a,b)=>a.id-b.id
          
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
          
        
        },
        {
          title: 'Price',
          dataIndex: 'unitPrice',
          key: 'age',
        },
        {
          title: 'Stocks',
          dataIndex: 'unitsInstock',
          key:'address'
        },
      ];
    return (
        <>
        <Table columns={columns} dataSource={data} />;
   </>
  )
}

export default Tables