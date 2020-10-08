import React, { Component,Fragment } from 'react';
import PropTypes, { array } from 'prop-types';
import { Table,Pagination,Button } from 'antd'

class TableBasic extends Component{
    render(){
        const {dataSource,rowSelection,total,tableConfig ,batchButton,columns,onChangeCurrentPage,deleteAll} = this.props
        return (
            <Fragment>
                    <Table rowSelection = { rowSelection } pagination={false} rowKey="id" columns={columns} dataSource={dataSource} bordered></Table>
                    <div style={{display:"flex",marginTop:'20px',justifyContent:"space-between"}}>
                        { batchButton &&  <Button  type="primary" onClick={ deleteAll} >批量删除</Button>     }
                        <Pagination
                            defaultCurrent={1}
                            onChange={ onChangeCurrentPage }
                            total={ total }
                            showSizeChanger
                            showQuickJumper
                            showTotal={total => `数据共${total}条`}
                        />

                    </div>    
            </Fragment>    
        )
    }
}

// TableBasic.propTypes = {
//     total:PropTypes.string,
//     rowSelection:PropTypes.object
// }

// TableBasic.defaultProps = {
//     total:0,
//     batchButton:false,
//     rowSelection:array
// }


export default TableBasic;










