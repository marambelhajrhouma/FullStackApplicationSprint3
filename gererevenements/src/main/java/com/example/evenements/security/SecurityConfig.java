package com.example.evenements.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import
org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled=true)
public class SecurityConfig {
	
	@Bean
	public SecurityFilterChain filterChain (HttpSecurity http) throws
		Exception{
			http.sessionManagement( session ->
			session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			
			.csrf( csrf -> csrf.disable())
			
		//////ce code j'ai le fait en webconfig!!!!!!!
					/*
					 * 
					 * .cors(cors -> cors.configurationSource(new CorsConfigurationSource() {
					 * 
					 * @Override public CorsConfiguration getCorsConfiguration(HttpServletRequest
					 * request) { CorsConfiguration cors = new CorsConfiguration();
					 * 
					 * cors.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
					 * cors.setAllowedMethods(Collections.singletonList("*"));
					 * cors.setAllowedHeaders(Collections.singletonList("*"));
					 * cors.setExposedHeaders(Collections.singletonList("Authorization")); return
					 * cors; } }))
					 */
			
			
			
			.authorizeHttpRequests( requests ->
			requests.requestMatchers(HttpMethod.GET, "api/all").hasAnyAuthority("ADMIN", "USER")
			

						.requestMatchers(HttpMethod.GET,"/api/getbyid/**").hasAnyAuthority("ADMIN", "USER")
						//.requestMatchers(HttpMethod.POST,"/api/addev/**").hasAnyAuthority("ADMIN")
						.requestMatchers(HttpMethod.PUT,"/api/updateev/**").hasAnyAuthority("ADMIN")
						.requestMatchers(HttpMethod.DELETE,"/api/deleteev/**").hasAnyAuthority("ADMIN")
					.anyRequest().authenticated() )
			
			.addFilterBefore(new JWTAuthorizationFilter(),UsernamePasswordAuthenticationFilter.class);
			
					
			
		return http.build();
	}

}
