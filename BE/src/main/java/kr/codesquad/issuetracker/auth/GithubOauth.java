package kr.codesquad.issuetracker.auth;

import static kr.codesquad.issuetracker.auth.utils.OauthUtils.TOKEN;

import kr.codesquad.issuetracker.auth.dto.AccessTokenRequestDto;
import kr.codesquad.issuetracker.auth.dto.AccessTokenResponseDto;
import kr.codesquad.issuetracker.auth.dto.UserProfile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class GithubOauth {

	private final String clientId;
	private final String clientSecret;
	private final String accessTokenUri;
	private final String userUri;

	private final WebClient webClient;

	public GithubOauth(@Value("${oauth2.user.github.client-id}") String clientId,
						@Value("${oauth2.user.github.client-secret}") String clientSecret,
						@Value("${oauth2.provider.github.token-uri}") String accessTokenUri,
						@Value("${oauth2.provider.github.user-info-uri}") String userUri,
						WebClient webClient) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.accessTokenUri = accessTokenUri;
		this.userUri = userUri;
		this.webClient = webClient;
	}

	public AccessTokenResponseDto getToken(String code) {
		AccessTokenRequestDto accessTokenRequest =
			new AccessTokenRequestDto(clientId, clientSecret, code);

		//TODO:exception만들기
		return webClient.post()
			.uri(accessTokenUri)
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(accessTokenRequest)
			.retrieve()
			.onStatus(HttpStatus::is4xxClientError, error -> Mono.error(RuntimeException::new))
			.bodyToMono(AccessTokenResponseDto.class)
			.blockOptional()
			.orElseThrow(RuntimeException::new);
	}

	//TODO:exception만들기
	public UserProfile getUserInfo(String accessToken) {
		return webClient.get()
			.uri(userUri)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken)
			.retrieve()
			.onStatus(HttpStatus::is4xxClientError, error -> Mono.error(RuntimeException::new))
			.bodyToMono(UserProfile.class)
			.blockOptional()
			.orElseThrow(RuntimeException::new);
	}
}
