package com.example.tp1.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Project implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="projectid")
    private Long id;
    private String title;
    private String description;


    //@OneToMany(mappedBy="porject",cascade = CascadeType.ALL,fetch = FetchType.LAZY)

    //@ManyToMany (cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @ManyToMany (cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonIgnore
    //@JsonBackReference
    private List<User> users;




    public Project(Long id, String title, String description, List<User> users) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.users = users;
    }

    public Project() {
        super();
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public List<User> getUsers() {
        return users;
    }
    public void setUsers(List<User> users) {
        this.users = users;
    }
    }


