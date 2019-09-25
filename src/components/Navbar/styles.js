import styled from 'styled-components';
import {
  Container as SidebarContainer,
  MenuItem as SidebarMenuItem,
} from '../Sidebar/styles';

export const Container = styled(SidebarContainer)`
  height: 55px;
  width: 100%;
  bottom: 0;
  flex-direction: row;
`;

export const MenuItem = styled(SidebarMenuItem)``;
