import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useIntl } from 'umi';

const { Panel } = Collapse;

export default (): React.ReactNode => {
  const intl = useIntl();

  document.title = 'FAQ - Metal Gear Online';

  return (
    <PageContainer>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={intl.formatMessage({ id: 'app.faq.sysreqtitle' })} key="1">
          <div>
            <p>{intl.formatMessage({ id: 'app.faq.sysreq' })}</p>
            <Divider />
            <p>
              <b>{intl.formatMessage({ id: 'app.minimum' })}</b>
            </p>
            <p>
              <i>These CPUs are the minimum recommended to maintain 30 FPS in 12 player lobbies. </i>
            </p>
            <p>
              <i>It is possible to play on weaker hardware than this but we cannot recommend it.</i>
            </p>
            <ul>
              <li>CPU: Intel i5 10400 or AMD Ryzen 3600</li>
              <li>GPU: Anything with Vulkan Support</li>
            </ul>

            <p>
              <b>{intl.formatMessage({ id: 'app.recommended' })}</b>
            </p>
            <p>
              <i>
                These CPUs are the minimum recommended to maintain 60 FPS in 16 player lobbies with
                all graphical options enabled.
              </i>
            </p>
            <ul>
              <li>CPU: Intel i7-12700K</li>
              <li>GPU: Anything with Vulkan Support</li>
            </ul>
          </div>
        </Panel>
        <Panel header={intl.formatMessage({ id: 'app.faq.nosound' })} key="2">
          <div>
            Having no sound is a sign of poor CPU performance. There are a few emulator settings you
            can change to mitigate this issue.
            <Divider />
            <b>CPU</b>
            <ul>
              <li>Prefered SPU Threads (Play with different values)</li>
            </ul>
            <b>Audio</b>
            <ul>
              <li>Increase Audio Buffering</li>
              <li>Enable Time Stretching</li>
              <li>Change Audio Out to Cubeb or XAudio (find what works best for you)</li>
            </ul>
            <b>Advacned</b>
            <ul>
              <li>Maximum Number of SPURS Threads (Play with different values)</li>
            </ul>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.faq.host' })} key="3">
          <div>
            <p>
              In order to host games you need to forward port 5730 UDP (or whichever port you
              selected in-game. 5730 is the default).
            </p>
            <p>The steps vary between ISPs and routers.</p>
            <p>
              You can also try your luck with software such as Portmapper (
              <a href="https://www.youtube.com/watch?v=eENjFkI7Zts&ab_channel=DormantHero">
                Video Guide
              </a>
            </p>
            ).
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.faq.login' })} key="5">
          <div>
            <p>
              This is generally a result of having an outdated emulator. Make sure to update to the
              newest version.
            </p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.faq.donate' })} key="6">
          <div>
            <p>
              SaveMGO never has and never will ask for or accept donations of any kind. This is a passion project and we have no intention of profiting off of it. Furthermore, accepting donations of any kind puts the project at risk of being shut down.
            </p>
          </div>
        </Panel>
      </Collapse>
    </PageContainer>
  );
};
