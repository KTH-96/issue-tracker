package kr.codesquad.issuetracker.domain.label;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import kr.codesquad.issuetracker.web.dto.label.LabelRequestDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "label")
public class Label {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "label_id")
	private Long id;

	private String title;

	private String description;

	@Embedded
	private Color color;

	public Label(String title, String description, Color color) {
		this.title = title;
		this.description = description;
		this.color = color;
	}

	public void update(LabelRequestDto dto) {
		this.title = dto.getTitle();
		this.description = dto.getDescription();
		this.color = dto.getColor();
	}
}
