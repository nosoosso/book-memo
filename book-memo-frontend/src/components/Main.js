import React from 'react'
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import styles from './Main.module.css'

export class Main extends React.Component {
  state = {
    drawerOpen: false
  }

  render() {
    return (
      <div className={styles.drawerContainer}>
        <Drawer
          dismissible
          open={this.state.drawerOpen}
        >
          <DrawerHeader>
            <DrawerTitle>
              HOQEHFG
            </DrawerTitle>
          </DrawerHeader>
          <DrawerContent>
            <List singleSelection selectedIndex={0}>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='folder'/>}/>
                <ListItemText primaryText='Mail'/>
              </ListItem>
              <ListItem>
                <ListItemText primaryText='Hoge'/>
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>
        <DrawerAppContent className={styles.drawerAppContent}>
          <TopAppBar
            title="ノート一覧"
            navigationIcon={<MaterialIcon icon="menu" onClick={() => {
              this.setState(state => ({
                drawerOpen: !state.drawerOpen,
              }))
            }}/>}
            actionItems={[
              <MaterialIcon icon="search" onClick={() => {
              }}/>
            ]}
          />
          <TopAppBarFixedAdjust>
            My exciting content!
          </TopAppBarFixedAdjust>
        </DrawerAppContent>
      </div>
    )
  }
}