using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class salir : MonoBehaviour {

	void Update() {
		if (Input.GetKey("salir"))
			Application.Quit();

	}
}
