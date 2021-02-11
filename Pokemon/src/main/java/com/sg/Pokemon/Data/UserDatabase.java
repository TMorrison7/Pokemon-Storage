package com.sg.Pokemon.Data;

import com.sg.Pokemon.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import sun.jvm.hotspot.utilities.RBNode;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Repository
public class UserDatabase implements UserRepository {

    @Autowired
    private final JdbcTemplate jdbcTemplate;

    public UserDatabase(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public Random rand = new Random();
    public String sql;
    @Override
    public List<User> getAllUsers() {
        sql = "";
        List<User> users = jdbcTemplate.query(sql, new UserMapper());
        return users;
    }

    @Override
    public User getUserById(int id) {
        String sql = "" + id;
        User user = jdbcTemplate.queryForObject(sql, new UserMapper());
        return user;
    }

    @Override
    public User addUser(User user) {
        sql = "";
        jdbcTemplate.update(sql);
        return null;
    }

    private static final class UserMapper implements RowMapper<User> {

        @Override
        public User mapRow(ResultSet rs, int index) throws SQLException{
            User user = new User();
            user.setUser_Id(rs.getInt("user_Id"));
            user.setUsername(rs.getString("username"));
            user.setPassword(rs.getString("password"));

            return user;
        }
    }
}
