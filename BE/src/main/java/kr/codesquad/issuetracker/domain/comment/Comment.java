package kr.codesquad.issuetracker.domain.comment;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import kr.codesquad.issuetracker.domain.BaseTimeEntity;
import kr.codesquad.issuetracker.domain.image.Image;
import kr.codesquad.issuetracker.domain.issue.Issue;
import kr.codesquad.issuetracker.domain.member.Member;
import lombok.Getter;

@Getter
@Entity
@Table(name = "comments")
public class Comment extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
	private Long id;

	private String content;

	@OneToMany(mappedBy = "comment")
	private List<Image> images = new ArrayList<>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id")
	private Member writer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "issue_id")
	private Issue issue;

	public boolean isWriter(Member member, Issue issue) {
		return writer.equals(member) && writer.equals(issue.getWriter());
	}
}
