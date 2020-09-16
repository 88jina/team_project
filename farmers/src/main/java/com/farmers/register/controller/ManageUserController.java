package com.farmers.register.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;

import com.farmers.register.beans.*;
import com.farmers.register.service.*;

//@RestController
@Controller
public class ManageUserController {
	
	@Autowired
	TypeChangeService service;
	
}
