import Icon, { IconNameType } from '@/assets/icons/Icon';
import { GREYSCALE } from '@/common/constants';
import styled from 'styled-components';

type IssueMenuProps = {
  icon: IconNameType;
  menuName: string;
  count: number;
  isCurrent: boolean;
  onClick: () => void;
};

function IssueMenu({
  icon,
  menuName,
  count,
  isCurrent,
  onClick
}: IssueMenuProps) {
  const Menu = isCurrent ? CurrentMenu : DefaultMenu;
  const color = isCurrent ? GREYSCALE.TITLE_ACTION : GREYSCALE.LABEL;

  return (
    <IssueMenuBox onClick={onClick}>
      <Icon iconName={icon} width={14} height={14} stroke={color} />
      <Menu>
        {menuName}({count})
      </Menu>
    </IssueMenuBox>
  );
}

const IssueMenuBox = styled.li`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start', 'center')}
  gap: 5px;
  cursor: pointer;
`;

const DefaultMenu = styled.p`
  ${({ theme }) => theme.TYPOGRAPHY.LINK_SMALL}
  color: ${GREYSCALE.LABEL};
`;

const CurrentMenu = styled(DefaultMenu)`
  color: ${GREYSCALE.TITLE_ACTION};
`;

export default IssueMenu;
