

// import React, { PureComponent } from 'react';
// import { Button, Drawer, Toolbar } from 'react-md';

// import inboxListItems from 'constants/inboxListItems';

// export default class SimpleDrawer extends PureComponent {
//   state = { visible: false, position: 'left' };

//   openDrawerLeft = () => {
//     this.setState({ visible: true, position: 'left' });
//   };

//   openDrawerRight = () => {
//     this.setState({ visible: true, position: 'right' });
//   };

//   closeDrawer = () => {
//     this.setState({ visible: false });
//   };

//   handleVisibility = (visible) => {
//     this.setState({ visible });
//   };

//   render() {
//     const { visible, position } = this.state;
//     const isLeft = position === 'left';

//     const closeBtn = <Button icon onClick={this.closeDrawer}>{isLeft ? 'arrow_back' : 'close'}</Button>;
//     return (
//       <div>
//         <Button raised onClick={this.openDrawerLeft}>
//           Open Drawer Left
//         </Button>
//         <Button raised onClick={this.openDrawerRight}>
//           Open Drawer Right
//         </Button>
//         <Drawer
//           id="simple-drawer-example"
//           type={Drawer.DrawerTypes.TEMPORARY}
//           visible={visible}
//           position={position}
//           onVisibilityChange={this.handleVisibility}
//           navItems={inboxListItems}
//           header={(
//             <Toolbar
//               nav={isLeft ? null : closeBtn}
//               actions={isLeft ? closeBtn : null}
//               className="md-divider-border md-divider-border--bottom"
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }



// import { Button, SVGIcon } from 'react-md';

// // import done from 'icons/done.svg';

// const Flat = () => (
//   <div className="buttons__group">
//     <h5>Theme Examples</h5>
//     <Button flat>Hello, World!</Button>
//     <Button flat primary iconChildren="chat_bubble_outline">Chat</Button>
//     <Button flat secondary iconBefore={false} iconChildren="chat_bubble_outline">Chat</Button>
//     <Button flat primary>Done</Button>
//     <Button flat secondary>Done</Button>
//     <h5>Disabled Examples</h5>
//     <Button flat disabled>Disabled Button</Button>
//     <Button flat disabled iconChildren="close">Disabled Button</Button>
//     <h5>Theme Swapped Examples</h5>
//     <Button flat primary swapTheming>Hello</Button>
//     <Button flat secondary swapTheming>World</Button>
//   </div>
// );

// export default Flat;