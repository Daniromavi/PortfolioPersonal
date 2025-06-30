package com.portfolio.backend;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable()) // desactiva CSRF solo para pruebas
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(login -> login.disable()) // opcional: desactiva el formulario de login
                .httpBasic(httpBasic -> httpBasic.disable()) // opcional: desactiva basic auth
                .build();
    }
}
