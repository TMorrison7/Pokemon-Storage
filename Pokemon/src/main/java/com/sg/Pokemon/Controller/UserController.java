package com.sg.Pokemon.Controller;

import com.sg.Pokemon.Data.UserDatabase;
import com.sg.Pokemon.Data.UserRepository;
import com.sg.Pokemon.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController implements UserRepository {

    @Autowired
    private final UserDatabase userDatabase;

    public UserController(UserDatabase userDatabase) {
        this.userDatabase = userDatabase;
    }

    @GetMapping("/Users")
    public List<User> getAllUsers() {
        return userDatabase.getAllUsers();
    }

    @Override
    public User getUserById(int id) {
        return userDatabase.getUserById(id);
    }

    @Override
    public User addUser(User user) {
        return userDatabase.addUser(user);
    }


}
