import Icon from '@/assets/icons/Icon';
import { COLORS, GREYSCALE } from '@/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CheckBox from './CheckBox';
import Label from './Label';

type LabelColorType = {
  backgroundColor: string;
  textColor: string;
};

type LabelType = {
  name: string;
  color: LabelColorType;
};

type IssueItemProps = {
  id: string;
  title: string;
  createdTime: string;
  writer: string;
  labels: LabelType[];
  milestoneName: string;
  isSelected: boolean;
  isLast: boolean;
  updateIssueState: (id: string) => void;
};

function IssueItem({
  id,
  title,
  createdTime,
  writer,
  labels,
  milestoneName,
  isSelected,
  isLast,
  updateIssueState
}: IssueItemProps) {
  const IssueItemBox = isLast ? LastIssueItemBox : DefaultIssueItemBox;
  const checkBoxType = isSelected ? 'active' : 'initial';

  const handleClick = () => {
    updateIssueState(id);
  };

  const getTimeStamp = (writtenTime: string) => {
    let timeStamp;

    const writtenDate = new Date(writtenTime);
    const today = new Date();

    const sec = 60 * 1000;
    const min = sec * 60;
    const hour = min * 24;
    const day = hour * 30;
    const gap = today.getTime() - writtenDate.getTime();

    switch (true) {
      case gap < sec:
        timeStamp = `${Math.floor(gap / 1000)}초 전`;
        break;
      case gap < min:
        timeStamp = `${Math.floor(gap / sec)}분 전`;
        break;
      case gap < hour:
        timeStamp = `${Math.floor(gap / min)}시간 전`;
        break;
      case gap < day:
        timeStamp = `${Math.floor(gap / hour)}일 전`;
        break;
      case writtenDate.getFullYear() === today.getFullYear():
        timeStamp = `${
          writtenDate.getMonth() + 1
        }월 ${writtenDate.getDate()}일`;
        break;
      default:
        timeStamp = `${writtenDate.getFullYear()}년 ${
          writtenDate.getMonth() + 1
        }월 ${writtenDate.getDate()}일`;
    }

    return timeStamp;
  };
  const timeStamp = getTimeStamp(createdTime);

  return (
    <IssueItemBox>
      <CheckBox checkBoxType={checkBoxType} onClick={handleClick} />
      <IssueText>
        <IssueTitle>
          <Icon
            iconName="alertCircle"
            stroke={COLORS.BLUE}
            fill={COLORS.LIGHT_BLUE}
          />
          <Link to="/issueDetail">
            <TitleText>{title}</TitleText>
          </Link>
          <Labels>
            <Label
              labelName="레이블 이름"
              backgroundColor={GREYSCALE.BACKGROUND}
              textColor="어두운 색"
            />
          </Labels>
        </IssueTitle>
        <IssueInfo>
          <span>#{id}</span>
          <span>
            이 이슈가 {timeStamp}에, {writer}에 의해 작성되었습니다
          </span>
          {milestoneName && (
            <Milestone>
              <Icon iconName="milestone" fill={GREYSCALE.LABEL} />
              {milestoneName}
            </Milestone>
          )}
        </IssueInfo>
      </IssueText>
      <IssueAssignee>
        <Icon iconName="userImageSmall" width={20} height={20} />
      </IssueAssignee>
    </IssueItemBox>
  );
}

const DefaultIssueItemBox = styled.div`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start')}
  width: 1280px;
  height: 100px;
  background-color: ${GREYSCALE.OFF_WHITE};
  border: 1px solid ${GREYSCALE.LINE};
  border-top: none;
  padding: 24px 32px;
  gap: 32px;
`;

const LastIssueItemBox = styled(DefaultIssueItemBox)`
  border-radius: 0px 0px 16px 16px;
`;

const IssueText = styled.div`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('column')}
  gap: 8px;
  margin-top: -8px;
`;

const IssueTitle = styled.div`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start', 'center')}
  gap: 8px;
`;

const TitleText = styled.h2`
  ${({ theme }) => theme.TYPOGRAPHY.LINK_MEDIUM}
  color: ${GREYSCALE.TITLE_ACTION};
  cursor: pointer;
`;

const Labels = styled.ul`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start', 'center')}
  gap: 8px;
`;

const IssueInfo = styled.div`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start', 'center')}
  gap: 16px;
  color: ${GREYSCALE.LABEL};
`;

const Milestone = styled.p`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'flex-start', 'center')}
  gap: 8px;
`;

const IssueAssignee = styled.div`
  ${({ theme }) => theme.LAYOUT.flexLayoutMixin('row', 'center', 'center')}
  margin-left: auto;
`;

export default IssueItem;
