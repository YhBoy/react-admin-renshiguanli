import React,{ Component,Fragment } from 'react'

import {Button,Table,Pagination} from 'antd';
import PropTypes from 'prop-types'

class TableComponents extends Component{
    constructor(props){
        super()
        this.state={
            pageSize:10,
            pageNumber:1
        }
        
    }
    componentDidMount(){
        console.log(this.props.tableConfig)
    }
    onChangeCurrentPage=(value)=>{
        console.log(value)
        const result = {
            pageSize:value,
            pageNumber:this.state.pageNumber
        }
        
    }
    render(){
        const {dataSource,rowSelection,total,tableConfig ,batchButton} = this.props
        return (
            <Fragment>
                <Table pagination={false} rowSelection = { rowSelection } rowKey="id" columns={tableConfig.thead} dataSource={dataSource}></Table>
                <div style={{display:"flex",marginTop:'20px',justifyContent:"space-between"}}>
                    
                    { batchButton &&  <Button  type="primary" onClick={ ()=> this.deleteAll() } >批量删除</Button>     }
                   
                    <Pagination
                        defaultCurrent={1}
                        onChange={ (value)=>this.onChangeCurrentPage(value) }
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


TableComponents.propTypes = {
    columns:PropTypes.array,
    dataSource:PropTypes.array,
    rowSelection:PropTypes.object
}

TableComponents.defaultProps = {
    batchButton:false
}

export default TableComponents;

