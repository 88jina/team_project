package com.farmers.register.config;

import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.interceptor.*;


@Configuration
@EnableWebMvc
@ComponentScan("com.farmers.register")
public class ServletConfiguration implements WebMvcConfigurer {
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		registry.jsp("/views/",".jsp");

	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		WebMvcConfigurer.super.addResourceHandlers(registry);
		registry.addResourceHandler("/**").addResourceLocations("/resources/");

	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginInterceptor(new LoginBean())).addPathPatterns("/admin/**");
		WebMvcConfigurer.super.addInterceptors(registry);
	}

}
