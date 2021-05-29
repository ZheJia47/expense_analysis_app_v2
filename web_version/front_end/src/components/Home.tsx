import React from 'react';
// element-react
import { Button, Menu, Icon } from 'element-react';
import 'element-theme-default';

// style #################################################
const StyleSheet: object ={
  width:"100vw",
  height:"100vh",
  backgroundColor:"black",
  display: "flex",
  flexDirection:"column"
}

const ActualFontColor: object ={
  color:'red'
}

// component #############################################
// const SayHello = (props: {content: string}) =>{
//   <div>
//     {`${props.content}`}
//   </div>
// }




const HomePage=()=>{
  return(
    <div style={StyleSheet}>
      <Menu style={{width:'400px', border: '1px solid '}} theme="dark"> 
        {/* 固定存款 */}
        <Menu.SubMenu index="0" title={<h3>固定存款</h3>}>
          <Menu.Item index="0-0">每月存款</Menu.Item>
        </Menu.SubMenu>
        {/* 固定花費 */}
        <Menu.SubMenu index="1"  title={<h3>固定花費</h3>}>
          
        </Menu.SubMenu>
        {/* 計畫花費 */}
        <Menu.SubMenu index="2"  title={<h3>計畫花費: 預估: $10000 
            <span style ={ActualFontColor}> &nbsp; 實際: $10000</span>
          </h3>}>
          
        </Menu.SubMenu>
        {/* 非固定花費 */}
        <Menu.SubMenu index="3" title={<h3>非固定花費</h3>}>
          
        </Menu.SubMenu>
      </Menu>

      {/* test for calling back end */}
      <Button style={{width:'150px' }}>
        this is a button
      </Button>
    </div>
  )
}

export default HomePage;