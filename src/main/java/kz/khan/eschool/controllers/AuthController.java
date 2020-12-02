package kz.khan.eschool.controllers;

import kz.khan.eschool.models.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin
public class AuthController {

    @RequestMapping("/login")
    public boolean login(@RequestBody User user){
        return user.getUsername().equals("username") && user.getPassword().equals("password");
    }

    @RequestMapping("/student")
    public Principal student(HttpServletRequest request) {
        String authToken = request.getHeader("authorization").substring("Basic".length()).trim();

        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}
