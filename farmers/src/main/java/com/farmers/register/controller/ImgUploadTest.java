package com.farmers.register.controller;

import java.io.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import com.farmers.register.service.*;

@Controller
public class ImgUploadTest {
	@Autowired
	TestService service;
//	
//	@RequestMapping(value="/post", method=RequestMethod.POST)
	public void imgUploadTest(@RequestParam("file")MultipartFile file) {
		
		
		String path = "home/jina01/img";
		
		String originFileName = file.getOriginalFilename();
		long fileSize = file.getSize();
		System.out.println("originFileName : "+originFileName);
		System.out.println("fileSize : "+fileSize);
		
		String safeFile = path+System.currentTimeMillis()+originFileName;
		
		try {
			file.transferTo(new File(safeFile));
		} catch (IOException e) {
			e.printStackTrace();
		}catch(IllegalStateException e){
			e.printStackTrace();
		}
		
		
	}
}
