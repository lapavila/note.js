import React, { ReactNode } from 'react';

import { AppBar, NavigationDrawer, Container } from '../../components';
import withNotes from '../Notes/withNotes';

import { MenuModel } from '../../model/MenuModel';

interface Props {
  isMenuOpen: boolean;
  menu: MenuModel[];
  onOpenMenu: any;
  onCloseMenu: any;
  children?: ReactNode;
  isLoading?: boolean | undefined;
  isSaveError?: boolean | undefined;
  onSaveRetry?: any;
}

const PageLayout: React.FC<Props> = props => {
  const {
    isMenuOpen,
    menu,
    onOpenMenu,
    onCloseMenu,
    children,
    isLoading,
    isSaveError,
    onSaveRetry
  } = props;
  return (
    <div>
      <AppBar
        isLoading={isLoading}
        isSaveError={isSaveError}
        onSaveRetry={onSaveRetry}
        onOpenMenu={onOpenMenu}
      />
      <Container>{children}</Container>
      <NavigationDrawer
        menu={menu}
        isOpen={isMenuOpen}
        onCloseMenu={onCloseMenu}
      />
    </div>
  );
};

export default withNotes(PageLayout);
