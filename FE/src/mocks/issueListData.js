const issueListData = {
  opened: {
    labelCount: 3,
    milestoneCount: 2,
    openedIssues: 3,
    closedIssues: 0,
    issues: [
      {
        id: 1,
        title: '제목1',
        createdTime: '2022-06-23 12:12:13',
        writer: '글쓴이1',
        labels: [
          {
            name: '라벨네임',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          },
          {
            name: '라벨네임1',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          }
        ],
        milestoneName: '마일스톤1'
      },
      {
        id: 2,
        title: '제목2',
        createdTime: '2022-06-22 12:12:13',
        writer: '글쓴이2',
        labels: [],
        milestoneName: '마일스톤2'
      },
      {
        id: 3,
        title: '제목3',
        createdTime: '2021-06-22 20:12:13',
        writer: '글쓴이3',
        labels: [
          {
            name: '라벨네임',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          },
          {
            name: '라벨네임1',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          }
        ],
        milestoneName: ''
      }
    ]
  },
  closed: {
    labelCount: 3,
    milestoneCount: 2,
    openedIssues: 3,
    closedIssues: 0,
    issues: []
  },
  all: {
    labelCount: 3,
    milestoneCount: 2,
    openedIssues: 3,
    closedIssues: 0,
    issues: [
      {
        id: 1,
        title: '제목1',
        createdTime: '2022-06-23 12:12:13',
        writer: '글쓴이1',
        labels: [
          {
            name: '라벨네임',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          },
          {
            name: '라벨네임1',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          }
        ],
        milestoneName: '마일스톤1'
      },
      {
        id: 2,
        title: '제목2',
        createdTime: '2022-06-22 12:12:13',
        writer: '글쓴이2',
        labels: [],
        milestoneName: '마일스톤2'
      },
      {
        id: 3,
        title: '제목3',
        createdTime: '2021-06-22 20:12:13',
        writer: '글쓴이3',
        labels: [
          {
            name: '라벨네임',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          },
          {
            name: '라벨네임1',
            color: {
              backgroundColor: '#000000',
              textColor: '#FFFFFF'
            }
          }
        ],
        milestoneName: ''
      }
    ]
  }
};

export default issueListData;