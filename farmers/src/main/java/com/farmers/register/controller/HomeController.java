package com.farmers.register.controller;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {
	@RequestMapping(value="/")
	public String home() {
		return "home/home";
	}
	@RequestMapping(value="/api", method=RequestMethod.GET)
	public String join() {
		return "join/join";
	}
	
	@RequestMapping(value="/auth", method=RequestMethod.GET)
	public String joinAuth() {
		return"join/joinAuth";
	}
	@GetMapping(value="/dupl")
	public String duplCheck() {
		return "join/joinDuplCheck";
	}
}
