package kr.codesquad.issuetracker.domain.member.repository;

import java.util.Optional;
import kr.codesquad.issuetracker.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

	Optional<Member> findByEmail(String Email);
}
