package com.farmers.register.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

@Controller
public class FileUploadController {
	
	@Autowired
	ItemPostService service;
	
	
	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public String submit(@RequestParam("file") MultipartFile file, ItemBean itemBean, ModelMap modelMap) {
		
		
		
	    modelMap.addAttribute("file", file);
	    return "admin/fileUploadView";
	}
}
