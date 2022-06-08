package com.deltax.music.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deltax.music.entities.Songs;

@Repository
public interface SongDao extends JpaRepository<Songs, Integer> {

}
