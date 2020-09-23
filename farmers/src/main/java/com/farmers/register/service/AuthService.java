package com.farmers.register.service;

import java.io.*;

import javax.mail.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.mail.javamail.*;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

	@Autowired
	private JavaMailSender mailSender;

	public int authKeyMaker() {
		int authKey;
		authKey = (int) (Math.random() * 100000 + 1);
		return authKey;
	}

	public void sendMail(String userEmail, String authKey) {
		try {
			MailUtils sendMail = new MailUtils(mailSender);
			sendMail.setSubject("Farmers 회원가입 인증 메일");
			sendMail.setText(
					new StringBuffer().append("<h1>[이메일 인증]</h1>").append("<p>아래 숫자를 인증번호 창에 입력하시면 인증이 완료됩니다</p>")
							.append(authKey).append("<p>해당 사이트에 가입한 적이 없다면 이 메일을 무시하세요.</p>").toString());
			sendMail.setTo(userEmail);
			sendMail.setFrom("projecttrust2020@gamil.com", "Farmers Admin");
			sendMail.send();

		} catch (MessagingException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}
}
