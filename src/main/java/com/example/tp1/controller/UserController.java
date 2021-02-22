package com.example.tp1.controller;

import com.example.tp1.entities.Project;
import com.example.tp1.entities.User;
import com.example.tp1.repository.UserRepository;
import com.example.tp1.repository.projectRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {
    private static final Logger logger = LogManager.getLogger(UserController.class);
    @Autowired
    UserRepository userv;
    @Autowired
    projectRepository pserv;



    @GetMapping("/users")
    public List<User> getAllUsers() {
        List<User> pro = userv.findAll();

        for (User user : pro) {
            logger.debug("log:     " + user);
            System.out.println("sysout:   " + user);

        }
        return pro;

    }

    @PostMapping("/addusert")
    public User createUser(@Valid @RequestBody User user) {
        return userv.save(user);
    }


    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable(value = "id") Long Id) {
        return userv.findById(Id).orElseThrow(null);
        // .orElseThrow(() -> new ResourceNotFoundException("User", "id", Id));
    }

    @DeleteMapping("/userd/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userv.findById(userId).orElseThrow(null);
        //.orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        // userRepository.deleteById(userId);
        userv.delete(user);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable(value = "id") Long Id,
                           @Valid @RequestBody User userDetails) {

        User user = userv.findById(Id).orElseThrow(null);


        user.setEmail(userDetails.getEmail());
        user.setPwd(userDetails.getPwd());
        user.setFname(userDetails.getFname());
        user.setLname(userDetails.getLname());

        User updatedUser = userv.save(user);
        return updatedUser;
    }


    @PutMapping("/affecter/{uid}/{pid}")
    public void affecterUser(@PathVariable(value = "uid") Long Id,
                             @PathVariable(value = "pid") Long Idp,@Valid  Project pro) {
        List<User> list=new ArrayList<>();
        User user = userv.findById(Id).get();
        Project proj=pserv.findById(Idp).get();
        list.add(user);
        proj.setUsers(list);
        //User affecterUser=
        pserv.save(proj);
        //return affecterUser;


    }
}


