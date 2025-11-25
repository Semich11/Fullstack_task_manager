'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs_fullstack_assestment documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' :
                                            'id="xs-controllers-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' :
                                        'id="xs-injectables-links-module-AppModule-67ddcabf7271ad085d063f28b6c04d30f512d2c6ac39bae4334bdae30adaeda12851883c9a6f6aec38d618e4936ee99d7fb706048d0718f1f1c534290bbe110f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' : 'data-bs-target="#xs-controllers-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' :
                                            'id="xs-controllers-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' : 'data-bs-target="#xs-injectables-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' :
                                        'id="xs-injectables-links-module-PostModule-3b0bad0de0b3947bdf2dfac307653bf3e5dd7a02dd8a21579d993f06a7e00e3971a1e1abccdb0ffdc774eb3e3cddda0fba9aff032b94b92619dd76687f577183"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' :
                                            'id="xs-controllers-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' :
                                        'id="xs-injectables-links-module-TaskModule-0ff427a7d942828b13682fd04e8101854bb9acc4be50146f4049e5c9fe96bc61c188f6d82e94633b273b591faa9c098f05c0a094b8fa403510ca0866012ca4d5"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Task.html" data-type="entity-link" >Task</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatTaskDto.html" data-type="entity-link" >CreatTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetTaskParamDto.html" data-type="entity-link" >GetTaskParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchTaskDto.html" data-type="entity-link" >PatchTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});