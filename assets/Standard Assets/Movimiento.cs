using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityStandardAssets.CrossPlatformInput;

public class Movimiento : MonoBehaviour {
	float direccionx;
	Rigidbody2D ce;
	// Use this for initialization
	void Start () {
		ce = GetComponent<Rigidbody2D> ();
	}
	
	// Update is called once per frame
	void Update () {
		direccionx = CrossPlatformInputManager.GetAxis ("Horizontal");
		ce.velocity = new Vector2 (direccionx * 10, 0);
	}
}
