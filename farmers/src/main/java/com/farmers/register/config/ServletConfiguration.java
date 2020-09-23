package com.farmers.register.config;

import org.springframework.beans.factory.annotation.*;
import org.springframework.context.annotation.*;
import org.springframework.web.multipart.*;
import org.springframework.web.multipart.commons.*;
import org.springframework.web.multipart.support.*;
import org.springframework.web.servlet.config.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.interceptor.*;

@Configuration
@EnableWebMvc
@ComponentScan("com.farmers.register")
public class ServletConfiguration implements WebMvcConfigurer {

	@Autowired
	LoginBean loginBean;

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		WebMvcConfigurer.super.configureViewResolvers(registry);
		registry.jsp("/views/", ".jsp");

	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		WebMvcConfigurer.super.addResourceHandlers(registry);
		registry.addResourceHandler("/**").addResourceLocations("/resources/");
	}

//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(new LoginInterceptor(loginBean)).addPathPatterns("/admin/**");
//		WebMvcConfigurer.super.addInterceptors(registry);
//	}
	
	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver multipartResolver() {
	    CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
	    multipartResolver.setMaxUploadSize(100000);
	    return multipartResolver;
	}
}
