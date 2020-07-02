initSidebarItems({"fn":[["batch_verify_modules","Batch verify a list of modules and panic on any error. The modules should be topologically sorted in their dependency order."],["verify_dependencies",""],["verify_main_signature","This function checks the extra requirements on the signature of the main function of a script."],["verify_module_dependencies","Verification of a module in isolation trusts that struct and function handles not implemented in the module are declared correctly. The following procedure justifies this trust by checking that these declarations match the definitions in the module dependencies. Each dependency of 'module' is looked up in 'dependencies'.  If not found, an error is included in the returned list of errors.  If found, usage of types and functions of the dependency in 'module' is checked against the declarations in the found module and mismatch errors are returned."],["verify_script_dependencies","Verifying the dependencies of a script follows the same recipe as `VerifiedScript::new` ---convert to a module and invoke verify_module_dependencies. Each dependency of 'script' is looked up in 'dependencies'.  If not found, an error is included in the returned list of errors. If found, usage of types and functions of the dependency in 'script' is checked against the declarations in the found module and mismatch errors are returned."],["verify_script_dependency_map",""],["verify_vmodule_dependencies",""]],"struct":[["VerifiedModule","A module that has been verified for internal consistency."],["VerifiedScript","A script that has been verified for internal consistency."]]});