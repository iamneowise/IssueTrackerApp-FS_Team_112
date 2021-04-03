package com.example.service;

import java.util.List;

import com.example.entity.User;

public interface UserService {
	
	//save user to db.
	public void save(User user);

	//Get list of user.
	public List<User> findAll();

	public void update(User user);
	
	//remove User.
	public void removeUser(User user);

}
