package com.example.tp1.repository;


import com.example.tp1.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface projectRepository extends JpaRepository<Project,Long> {
	//@PersistenceContext
	  //EntityManager em=null;

	/*@Query(value="select u.fname,proj.description from user"
			+"u join project_users pju on pju.project_projectid=u.id"
			+" join project proj on proj.id=pju.users_userid WHERE u.fname = fname and u.lname = lname",nativeQuery = true)*/
	
	//List<Project> findAllAffected(@Param("x")String fname, @Param("y")String lname);
	@Query("select p.project from User p where p.fname=:x and p.lname=:y")
	List<Project> findAllAffected(@Param("x")String fname, @Param("y")String lname);

}
