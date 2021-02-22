package com.example.tp1.controller;

import java.util.List;

import javax.validation.Valid;

import com.example.tp1.entities.Project;
import com.example.tp1.repository.projectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ProjectController {

    @Autowired
    projectRepository prepo;

    @GetMapping("/projects")
    public List<Project> getAllProject() {
        List<Project> pro = prepo.findAll();

        return pro;

    }

    @RequestMapping(value = "projet/ByUser/{fname}&{lname}", method = org.springframework.web.bind.annotation.RequestMethod.GET)
    //@RequestMapping(value = "projet/ByUser", method = org.springframework.web.bind.annotation.RequestMethod.GET)
    public List<Project> getAllProjectAffect(@PathVariable String fname, @PathVariable String lname) {
        return  prepo.findAllAffected(fname,lname);


    }


    @PostMapping("/addproject")
    public Project createProject(@Valid @RequestBody Project pro) {
        return prepo.save(pro);
    }

}